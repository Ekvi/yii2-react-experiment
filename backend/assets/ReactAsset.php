<?php
namespace backend\assets;

use yii\web\AssetBundle;

class ReactAsset extends AssetBundle
{
    public $sourcePath = null;

    public $js = [
        YII_ENV_DEV ? "https://unpkg.com/react@15/dist/react.js" : "/https://unpkg.com/react@15/dist/react.min.js",
        YII_ENV_DEV ? "https://unpkg.com/react-dom@15/dist/react-dom.js" : "https://unpkg.com/react-dom@15/dist/react-dom.min.js",
        YII_ENV_DEV ? "http://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.15/browser.js" : null,
    ];
}