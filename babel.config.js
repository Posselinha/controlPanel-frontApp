module.exports = function (api) {
    api.cache(true);
    return {
        presets: [
            ["babel-preset-expo", { jsxImportSource: "nativewind" }],
            "nativewind/babel"
        ],
        plugins: [
            "react-native-gesture-handler",
            "react-native-reanimated/plugin" // sempre por ultimo
        ]
    }
}