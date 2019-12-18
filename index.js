const core = require('@actions/core');
const AppInfoParser = require('app-info-parser');

async function main() {
    try {
        // inputs from action
        const apkPath = core.getInput('apkPath');

        console.log(apkPath);

        const parser = new AppInfoParser(apkPath);// or xxx.ipa
        parser.parse().then(result => {

            core.setOutput("versionCode", result.versionCode);
            core.setOutput("versionNum", result.versionName);
            core.setOutput("applicationId", result.package);
            core.setOutput("name", result.application.label);
            console.log('app info ----> ', result);

        }).catch(err => {
            console.log('err ----> ', err)
        });

    } catch (error) {
        console.log('catch error ----> ', error);
        core.setFailed(error.message);
    }
}


main();
