# OpenCode 備份與還原工具

備份 opencode 的設定、Skills、專案 AGENTS.md，災難時一鍵還原。

---

## 檔案說明

| 檔案 | 用途 |
|------|------|
| `backup.bat` | 備份腳本（雙擊執行） |
| `restore.bat` | 還原腳本（雙擊執行） |
| `backup.ps1` | 備份邏輯（batch 自動呼叫） |
| `restore.ps1` | 還原邏輯（batch 自動呼叫） |
| `archives/` | 備份 ZIP 存放處 |

---

## 備份操作步驟

### 方法一：雙擊執行

1. 開啟檔案總管，導航到：
   ```
   G:\我的雲端硬碟\2026trip\tools\backup\
   ```
2. 雙擊 `backup.bat`
3. 等待命令視窗跑完，看到 `Backup OK!` 即完成
4. 備份檔自動存到 `archives\opencode-backup-YYYYMMDD.zip`

### 方法二：PowerShell 執行

1. 開啟 PowerShell 或 VS Code 終端機
2. 執行：
   ```powershell
   powershell -NoProfile -ExecutionPolicy Bypass -File "G:\我的雲端硬碟\2026trip\tools\backup\backup.ps1"
   ```
3. 看到 `Backup OK!` 即完成

### 備份內容

| 來源 | 目的地 | 說明 |
|------|--------|------|
| `%USERPROFILE%\.config\opencode\opencode.json` | `config\` | 主設定（模型、MCP） |
| `%USERPROFILE%\.config\opencode\opencode.jsonc` | `config\` | 備用設定 |
| `%USERPROFILE%\.config\opencode\package.json` | `config\` | MCP 依賴 |
| `%USERPROFILE%\.config\opencode\skills\` | `skills\` | 自建 Skills |
| `2026trip\AGENTS.md` | `projects\2026trip\` | 專案指令碼 |

### 注意事項

- 同一天多次備份會自動加流水號（`opencode-backup-20260601-2.zip`）
- `node_modules/` 不備份（可重裝）
- 備份約 6 KB，不佔空間

---

## 還原操作步驟

### 方法一：雙擊執行

1. 雙擊 `restore.bat`
2. 畫面會列出所有可用備份，格式如下：
   ```
   Available backups:
   -------------------
   1. opencode-backup-20260601.zip  (2026-06-01 10:26)
   2. opencode-backup-20260530.zip  (2026-05-30 15:30)
   ```
3. 輸入要還原的編號（數字），按 Enter
4. 確認畫面會列出將被覆寫的檔案，輸入 `Y` 確認
5. 看到 `Restore Complete!` 即完成
6. **重啟 opencode 使新設定生效**

### 方法二：PowerShell 執行

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File "G:\我的雲端硬碟\2026trip\tools\backup\restore.ps1"
```

### 還原後

- opencode 設定恢復到備份時的狀態
- Skills 恢復
- 專案 `AGENTS.md` 恢復
- **需要重啟 opencode** 才會套用新設定

---

## 手動還原（備用）

如果自動還原腳本壞了，手動操作：

1. 找到 `archives\opencode-backup-YYYYMMDD.zip`
2. 右鍵 → 解壓縮全部
3. 把解壓出來的檔案複製到對應位置：

| ZIP 內的資料夾 | 複製到 |
|----------------|--------|
| `config\opencode.json` | `%USERPROFILE%\.config\opencode\` |
| `config\opencode.jsonc` | `%USERPROFILE%\.config\opencode\` |
| `config\package.json` | `%USERPROFILE%\.config\opencode\` |
| `skills\*` | `%USERPROFILE%\.config\opencode\skills\` |
| `projects\2026trip\AGENTS.md` | `G:\我的雲端硬碟\2026trip\` |

---

## 備份策略建議

| 時機 | 動作 |
|------|------|
| 每次改設定前 | 跑一次 `backup.bat` |
| 更新 opencode 版本前 | **必跑** `backup.bat` |
| 新增/修改 Skill 後 | 跑一次 `backup.bat` |
| 每月定期 | 固定日期跑一次 |

---

## 常見問題

### Q: 執行時出現「執行原則停用指令碼」
A: 用方法二加 `-ExecutionPolicy Bypass` 參數，或在 PowerShell 執行：
```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```

### Q: 備份檔可以放到其他地方嗎？
A: 可以。ZIP 檔在 `archives\` 資料夾內，直接剪下貼上即可。還原時把 ZIP 放回 `archives\` 再跑 `restore.bat`。

### Q: 可以備份到雲端嗎？
A: `G:\我的雲端硬碟\` 本身就是 Google Drive 同步資料夾，備份檔會自動同步上雲端。

### Q: 還原後 opencode 沒變化？
A: 需要重啟 opencode。在 VS Code 中按 `Ctrl+Shift+P` → 輸入 `Reload Window`。
