# ============================================
# OpenCode 備份腳本
# 用法: 右鍵 → 使用 PowerShell 執行
# ============================================

$ErrorActionPreference = "Stop"
$BackupRoot = Join-Path $PSScriptRoot "archives"
if (-not (Test-Path $BackupRoot)) { New-Item -ItemType Directory -Path $BackupRoot -Force | Out-Null }

$DateStamp = Get-Date -Format "yyyyMMdd"
$Timestamp = Get-Date -Format "yyyy-MM-dd_HHmm"
$ZipName = "opencode-backup-$DateStamp.zip"
$ZipPath = Join-Path $BackupRoot $ZipName

# 如果今天已備份過，加流水號
$N = 1
while (Test-Path $ZipPath) {
    $N++
    $ZipName = "opencode-backup-$DateStamp-$N.zip"
    $ZipPath = Join-Path $BackupRoot $ZipName
}

Write-Host ""
Write-Host "  ========================================" -ForegroundColor Cyan
Write-Host "   OpenCode Backup" -ForegroundColor Cyan
Write-Host "   $Timestamp" -ForegroundColor Cyan
Write-Host "  ========================================" -ForegroundColor Cyan
Write-Host ""

# 暫存目錄
$TempDir = Join-Path $env:TEMP "opencode-backup-$DateStamp"
if (Test-Path $TempDir) { Remove-Item $TempDir -Recurse -Force }
New-Item -ItemType Directory -Path $TempDir -Force | Out-Null

$ConfigSrc = Join-Path $env:USERPROFILE ".config\opencode"

# ---- 1. 備份全域設定 ----
Write-Host "  [1/4] 備份全域設定..." -ForegroundColor Yellow
$ConfigDst = Join-Path $TempDir "config"
New-Item -ItemType Directory -Path $ConfigDst -Force | Out-Null

@("opencode.json", "opencode.jsonc", "package.json") | ForEach-Object {
    $src = Join-Path $ConfigSrc $_
    if (Test-Path $src) { Copy-Item $src $ConfigDst -Force }
}
Write-Host "         Done." -ForegroundColor Green

# ---- 2. 備份 Skills ----
Write-Host "  [2/4] 備份 Skills..." -ForegroundColor Yellow
$SkillsSrc = Join-Path $ConfigSrc "skills"
$SkillsDst = Join-Path $TempDir "skills"
if (Test-Path $SkillsSrc) {
    Copy-Item $SkillsSrc $SkillsDst -Recurse -Force
    Write-Host "         Done." -ForegroundColor Green
} else {
    Write-Host "         No skills directory, skipping." -ForegroundColor DarkGray
}

# ---- 3. 備份專案 AGENTS.md ----
Write-Host "  [3/4] 備份專案 AGENTS.md..." -ForegroundColor Yellow
$ProjDst = Join-Path $TempDir "projects"
New-Item -ItemType Directory -Path $ProjDst -Force | Out-Null

$ProjectRoot = Split-Path (Split-Path $PSScriptRoot) -Parent
$AgentsSrc = Join-Path $ProjectRoot "AGENTS.md"
if (Test-Path $AgentsSrc) {
    $ProjSub = Join-Path $ProjDst "2026trip"
    New-Item -ItemType Directory -Path $ProjSub -Force | Out-Null
    Copy-Item $AgentsSrc $ProjSub -Force
    Write-Host "         2026trip\AGENTS.md" -ForegroundColor Green
}

# ---- 4. 產生 manifest ----
Write-Host "  [4/4] 產生 manifest..." -ForegroundColor Yellow
$Manifest = Join-Path $TempDir "manifest.txt"
@"
OpenCode Backup
===============
Date:     $Timestamp
Host:     $env:COMPUTERNAME
User:     $env:USERNAME
Version:  $(opencode --version 2>$null)

Config:   $(Get-ChildItem $ConfigDst -File | Measure-Object | Select-Object -ExpandProperty Count) files
Skills:   $(if (Test-Path $SkillsDst) { (Get-ChildItem $SkillsDst -Recurse -File | Measure-Object).Count } else { 0 }) files
Projects: $(Get-ChildItem $ProjDst -Recurse -File | Measure-Object | Select-Object -ExpandProperty Count) files
"@ | Set-Content $Manifest -Encoding UTF8
Write-Host "         Done." -ForegroundColor Green

# ---- 打包 ----
Write-Host ""
Write-Host "  Packing $ZipName ..." -ForegroundColor Yellow
Compress-Archive -Path (Join-Path $TempDir "*") -DestinationPath $ZipPath -Force
Remove-Item $TempDir -Recurse -Force

# 結果
Write-Host ""
Write-Host "  ========================================" -ForegroundColor Cyan
if (Test-Path $ZipPath) {
    $Size = (Get-Item $ZipPath).Length
    Write-Host "   Backup OK!" -ForegroundColor Green
    Write-Host "   $ZipPath" -ForegroundColor White
    Write-Host "   Size: $([math]::Round($Size/1KB, 1)) KB" -ForegroundColor White
} else {
    Write-Host "   Backup FAILED!" -ForegroundColor Red
}
Write-Host "  ========================================" -ForegroundColor Cyan
Write-Host ""
pause
