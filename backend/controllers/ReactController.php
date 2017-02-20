<?php
namespace backend\controllers;

use yii\web\Controller;

class ReactController extends Controller
{
    public function actionIndex()
    {
        return $this->render('index');
    }
}