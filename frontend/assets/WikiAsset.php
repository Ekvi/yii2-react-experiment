<?php
namespace frontend\assets;

use yii\web\AssetBundle;


class WikiAsset extends AssetBundle
{

    public $sourcePath = '@react/js';

    public $js = [
        //'app/build/bundle.js'
        'wiki.js'
        //'/public/bundle.js'
    ];

    /*public $jsOptions = ['position' => \yii\web\View::POS_BEGIN];*/

    public $depends = [
        AppAsset::class,
    ];
}