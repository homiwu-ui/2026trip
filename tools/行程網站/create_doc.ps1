$htmlPath = "$env:TEMP\churches.html"
$docxPath = "$env:TEMP\churches.docx"
$word = New-Object -ComObject Word.Application
$word.Visible = $false
$doc = $word.Documents.Open($htmlPath)
$doc.SaveAs2($docxPath, 16)
$doc.Close()
$word.Quit()
[System.Runtime.InteropServices.Marshal]::ReleaseComObject($doc) | Out-Null
[System.Runtime.InteropServices.Marshal]::ReleaseComObject($word) | Out-Null
Copy-Item -LiteralPath $docxPath -Destination "G:\我的雲端硬碟\2026trip\tools\行程網站\義大利教堂推薦清單.docx" -Force
Write-Host "Saved to tools\行程網站\義大利教堂推薦清單.docx"
