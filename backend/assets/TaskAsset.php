<?php
namespace backend\assets;

use yii\web\AssetBundle;


class TaskAsset extends AssetBundle
{
    public $sourcePath = YII_ENV_DEV ? '@assets/jsx' : '@assets/js';

    public $js = [
        YII_ENV_DEV ? ['task.js', 'type' => 'text/babel'] : 'task-min.js',
    ];

    public $depends = [
        ReactAsset::class,
    ];
}