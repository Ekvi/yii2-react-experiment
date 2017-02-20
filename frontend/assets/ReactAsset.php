<?php
namespace frontend\assets;

use yii\web\AssetBundle;


class ReactAsset extends AssetBundle
{
    //public $basePath = '@webroot';
    //public $baseUrl = '@web';
    public $sourcePath = '@react/js';
    /*public $css = [
        'css/site.css',
    ];*/
    public $js = [
        //'app/build/bundle.js'
        'app.js'
        //'/public/bundle.js'
    ];

    /*public $jsOptions = ['position' => \yii\web\View::POS_BEGIN];*/

    public $depends = [
        AppAsset::class,
    ];
}