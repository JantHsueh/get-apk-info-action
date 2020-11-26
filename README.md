# Get Apk Info

 Get apk information,different compilation and build parameters, resulting in different apk version information


## Usage


```yaml
  - name: Get Apk Info
    id: apk
    uses: JantHsueh/get-apk-info-action@1.0
    with:
     apkPath: app/build/outputs/apk/release/app-release.apk
```


## Inputs

| Parameter  | Required | Info                                                         |
| ---------- | -------- | ------------------------------------------------------------ |
| `apkPath`  | `true`   | apk path.Default: app/build/outputs/apk/release/app-release.apk |


## Outputs

Output Parameter, mainly different compilation and build parameters, resulting in different apk version information.

>More information of the apk ,view the output log. If you need, you can fork and modify this project.


| Parameter   | Info                                                         |
| ----------  | ------------------------------------------------------------ |
| `versionCode`   |versionCode |
| `versionNum`   | versionNum  |
| `applicationId`   | applicationId |
| `name`   | application label |



## License

[MIT](LICENSE)
