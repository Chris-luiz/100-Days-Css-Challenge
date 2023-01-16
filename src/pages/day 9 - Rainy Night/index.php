<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>day 9 - Rainy Night</title>
    <style>
        <?php for($i=0; $i < 10; $i++): ?>
            .big-drop-<?= $i ?>{
                position: absolute;
                z-index: 20;
                left: <?=(-20 + 38 *  $i) . 'px'?> ;
                bottom: 0;
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background-color: #7FC1F9;
                animation: drop <?= (0.7 + rand(1,20) / 10) . 's' ?> linear <?= (rand(1,50)/ 25) .'s' ?> infinite;
                animation-fill-mode: both;
                transform-origin: 50% 100%;
            }
            .big-drop-<?= $i ?>:before {
                position: absolute;
                content: '';
                display: block;
                top: -2px;
                left: 1px;
                width: 6px;
                height: 6px;
                background: #7FC1F9;
                border-radius: 3px;
            }

            .big-drop-<?= $i ?>:after {
                position: absolute;
                content: '';
                display: block;
                top: -5px;
                left: 2px;
                width: 4px;
                height: 10px;
                background: #7FC1F9;
                border-radius: 50%;
            }

            .medium-drop-<?= $i ?>{
                position: absolute;
                z-index: 20;
                left: <?=(-20 + 58 *  $i) . 'px'?> ;
                bottom: 0;
                border-radius: 50%;
                background-color: #7FC1F9;
                transform-origin: 50% 100%;
                opacity: 0.6;
                width: 6px;
                height: 6px;
                animation: drop <?= (1.3 + rand(1,2) / 10) . 's' ?> linear <?= (rand(1,50)/ 25) .'s' ?> infinite;
                animation-fill-mode: both;
            }
            
            .medium-drop-<?= $i ?>:before {
                top: -2px;
                left: 1px;
                width: 4px;
                height: 4px;
            }
            
            .medium-drop-<?= $i ?>:after {
                top: -4px;
                left: 2px;
                width: 2px;
                height: 6px;
            }

            .small-drop-<?= $i ?> {
                position: absolute;
                z-index: 20;
                left: <?=(-20 + 58 *  $i) . 'px'?> ;
                bottom: 0;
                border-radius: 50%;
                background-color: #7FC1F9;
                transform-origin: 50% 100%;
                opacity: 0.3;
                width: 4px;
                height: 4px;
                animation: drop <?= (1.9 + rand(1,2) / 10) . 's' ?> linear <?= (rand(1,50)/ 25) .'s' ?> infinite;
                animation-fill-mode: both;
            }
                
            .small-drop-<?= $i ?>:before {
                top: -2px;
                left: 1px;
                width: 2px;
                height: 2px;
            }
            
            .small-drop-<?= $i ?>:after {
                top: -3px;
                left: 1px;
                width: 2px;
                height: 4px;
            }
        <?php endfor; ?>
    </style>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <div class="weather">
            <div class="weather-animation">

                <?php for($i=0; $i < 10; $i++): ?>
                    <div class="small-drop-<?= $i ?>"></div>
                <?php endfor; ?>

                <?php for($i=0; $i < 10; $i++): ?>
                    <div class="medium-drop-<?= $i ?>"></div>
                <?php endfor; ?>

                <?php for($i=0; $i < 10; $i++): ?>
                    <div class="big-drop-<?= $i ?>"></div>
                <?php endfor; ?>

                <div class="weather-animation-moon">
                    <div class="moon">
                        <div class="moon-crater">
                            <?php for($i=0; $i < 11; $i++): ?>
                                <div class="crater"></div>
                            <?php endfor; ?>
                        </div>
                    </div>
                </div>
                <div class="weather-animation-clouds">
                    <?php for($i=0; $i < 5; $i++): ?>
                        <div class="weather-animation-cloud"></div>
                    <?php endfor; ?>
                </div>
            </div>
            <div class="weather-description">
                <div class="weather-description-temperature">
                    <span class="temperute-number">12°</span>
                    <div class="temperature-details">
                        <span>Wind: E 7 km/h</span>
                        <span>Humidity: 87%</span>
                    </div>
                </div>
                <div class="weather-description-days">
                    <div class="weather-description-day">
                        <span>TUE</span>
                        <span>WED</span>
                    </div>
                    <div class="weather-description-degrees">
                        <span>21° / 9°</span>
                        <span>23° / 10°</span>	
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>


