#!/bin/bash

function usage {
    echo ""
    echo "Usage: $0 [ ios | android ]  [ release | debug ]"
    echo ""
}

# Arguments check
if [ $# != 2 ]; then
    usage
    exit 1
else
    app_os=$1
    build_type=$2
fi


if [ ${app_os} == "android" ]; then
    if [ ${build_type} == "debug" ]; then
        react-native bundle \
        --dev false \
        --platform android \
        --entry-file index.js \
        --assets-dest android/app/src/main/res \
        --bundle-output android/app/src/main/assets/index.android.bundle
        cd android
        ./gradlew assembleDebug
    elif [ ${build_type} == "release" ]; then
        keytool -genkey -v \
        -keyalg RSA \
        -keysize 2048 \
        -validity 10000 \
        -alias space-il \
        -keystore space-il.keystore
        
        mv my-release-key.keystore /android/app
        
        react-native bundle \
        --platform android \
        --dev false \
        --entry-file index.js \
        --bundle-output android/app/src/main/assets/index.android.bundle \
        --assets-dest android/app/src/main/res/

        cd android

        ./gradlew assembleRelease
    else
        echo ""
        echo "Error:"
        echo "Build type '${build_type}' is invalid."
        usage
        exit 3
    fi
elif [ ${app_os} == "ios" ]; then
    if [ ${build_type} == "debug" ]; then
    xcodebuild clean archive -scheme <Scheme> -configuration Release -archivePath ../builds/<App>.xcarchive DEVELOPMENT_TEAM=<DevTeam> PROVISIONING_PROFILE=<PROVISIONING_PROFILE> CODE_SIGN_IDENTITY=<CODE_SIGN_IDENTITY>
xcodebuild -exportArchive -archivePath ../builds/<App>.xcarchive -exportPath ../builds/ -exportOptionsPlist ./iosExportOptions.plist 
# https://stackoverflow.com/questions/42110496/how-to-build-ipa-application-for-react-native-ios

    elif [ ${build_type} == "release" ]; then
    else
        echo ""
        echo "Error:"
        echo "Build type '${build_type}' is invalid."
        usage
        exit 4
    fi
else
    echo ""
    echo "Error:"
    echo "App OS '${app_os}' is invalid."
    usage
    exit 2
fi



