# ============================================
# OpenCode 還原腳本
# 用法: 右鍵 → 使用 PowerShell 執行
# ============================================

$ErrorActionPreference = "Stop"
$BackupRoot = Join-Path $PSScriptRoot "archives"

Write-Host ""
Write-Host "  ========================================" -ForegroundColor Cyan
Write-Host "   OpenCode Restore" -ForegroundColor Cyan
Write-Host "  ========================================" -ForegroundColor Cyan
Write-Host ""

# ---- 列出可用備份 ----
$Backups = Get-ChildItem -Path $BackupRoot -Filter "opencode-backup-*.zip" -File -ErrorAction SilentlyContinue |
    Sort-Object LastWriteTime -Descending

if (-not $Backups -or $Backups.Count -eq 0) {
    Write-Host "  No backups found in $BackupRoot" -ForegroundColor Red
    Write-Host ""
    pause
    exit 1
}

Write-Host "  Available backups:" -ForegroundColor Yellow
Write-Host "  -------------------"
$Backups | ForEach-Object -Begin { $i = 0 } -Process {
    $i++
    Write-Host "   $i. $($_.Name)  ($($_.LastWriteTime.ToString('yyyy-MM-dd HH:mm')))" -ForegroundColor White
}

Write-Host ""
$Choice = Read-Host "  Select backup [1-$($Backups.Count)]"

if (-not $Choice -or $Choice -lt 1 -or $Choice -gt $Backups.Count) {
    Write-Host "  Invalid selection." -ForegroundColor Red
    pause
    exit 1
}

$SelectedZip = $Backups[$Choice - 1]
Write-Host ""
Write-Host "  Restoring from: $($SelectedZip.Name)" -ForegroundColor Yellow
Write-Host ""

# 解壓到暫存
$TempDir = Join-Path $env:TEMP "opencode-restore-$(Get-Random)"
New-Item -ItemType Directory -Path $TempDir -Force | Out-Null
Expand-Archive -Path $SelectedZip.FullName -DestinationPath $TempDir -Force

# ---- 顯示將被覆寫的檔案 ----
Write-Host "  The following will be overwritten:" -ForegroundColor Yellow
Write-Host "  -----------------------------------"

$ConfigDst = Join-Path $env:USERPROFILE ".config\opencode"

@("opencode.json", "opencode.jsonc", "package.json") | ForEach-Object {
    $f = Join-Path $TempDir "config\$_"
    if (Test-Path $f) { Write-Host "   $ConfigDst\$_" -ForegroundColor White }
}

$SkillsDir = Join-Path $TempDir "skills"
if (Test-Path $SkillsDir) {
    Write-Host "   $ConfigDst\skills\*" -ForegroundColor White
}

$ProjectsDir = Join-Path $TempDir "projects"
if (Test-Path $ProjectsDir) {
    Get-ChildItem $ProjectsDir -Recurse -File | ForEach-Object {
        Write-Host "   電案 $($_.FullName.Replace($TempDir, ''))" -ForegroundColor White
    }
}

Write-Host ""
$Confirm = Read-Host "  Continue? [Y/N]"
if ($Confirm -ne "Y" -and $Confirm -ne "y") {
    Write-Host "  Cancelled." -ForegroundColor Red
    Remove-Item $TempDir -Recurse -Force
    pause
    exit 0
}

# ---- 執行還原 ----
Write-Host ""
Write-Host "  Restoring..." -ForegroundColor Yellow

# 還原設定
@("opencode.json", "opencode.jsonc", "package.json") | ForEach-Object {
    $src = Join-Path $TempDir "config\$_"
    if (Test-Path $src) {
        Copy-Item $src $ConfigDst -Force
        Write-Host "   [OK] $_" -ForegroundColor Green
    }
}

# 還原 Skills
if (Test-Path $SkillsDir) {
    Copy-Item $SkillsDir (Join-Path $ConfigDst "skills") -Recurse -Force
    Write-Host "   [OK] skills\" -ForegroundColor Green
}

# 還原專案 AGENTS.md
$AgentsRestore = Join-Path $TempDir "projects\2026trip\AGENTS.md"
if (Test-Path $AgentsRestore) {
    $ProjectRoot = Split-Path (Split-Path $PSScriptRoot) -Parent
    Copy-Item $AgentsRestore (Join-Path $ProjectRoot "AGENTS.md") -Force
    Write-Host "   [OK] 2026trip\AGENTS.md" -ForegroundColor Green
}

# 清理
Remove-Item $TempDir -Recurse -Force

Write-Host ""
Write-Host "  ========================================" -ForegroundColor Cyan
Write-Host "   Restore Complete!" -ForegroundColor Green
Write-Host "   Restart opencode to apply changes." -ForegroundColor Yellow
Write-Host "  ========================================" -ForegroundColor Cyan
Write-Host ""
pause
