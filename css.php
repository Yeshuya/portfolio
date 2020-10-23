<style>
    .container_css{
        margin-left: 378px;
        font-family: "Staatliches";
    }

    .content{
        width: 100%;
        min-height: 500px;
    }
    /* Dropdown Button */
    .dropbtn {
        background-color: #183c64;
        color: white;
        padding: 16px;
        font-size: 25px;
        border: none;
        width: 250px;
        font-family: "Staatliches";
    }

    /* The container <div> - needed to position the dropdown content */
    .dropdown {
        position: relative;
        display: inline-block;
        margin-top: 50px;
        margin-left: 5px;
        font-family: "Staatliches";
    }

    /* Dropdown Content (Hidden by Default) */
    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #183c64;
        min-width: 250px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
    }

    /* Links inside the dropdown */
    .dropdown-content a {
        color: white;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        font-family: "Staatliches";
    }

    /* Change color of dropdown links on hover */
    .dropdown-content a:hover {background-color: #183c64;}

    /* Show the dropdown menu on hover */
    .dropdown:hover .dropdown-content {display: block;}

    /* Change the background color of the dropdown button when the dropdown content is shown */
    .dropdown:hover .dropbtn {background-color: white; color: #183c64;}
</style>

<div class="container_css">
	<div class="dropdown">
        <button class="dropbtn">Module 2</button>
        <div class="dropdown-content">
            <a href="index.php?page=css&module=lt22"> Learning Task 2.2 </a>
            <a href="index.php?page=css&module=lt23"> Learning Task 2.3 </a>	
        </div>
    </div>
    <div class="dropdown">
        <button class="dropbtn">Module 3</button>
        <div class="dropdown-content">
            <a href="index.php?page=css&module=lt32"> Learning Task 3.2 </a>
            <a href="index.php?page=css&module=lt33"> Learning Task 3.3 </a>	
        </div>
    </div>
    <div class="dropdown">
        <button class="dropbtn">Module 4</button>
        <div class="dropdown-content">
            <a href="index.php?page=css&module=lt41"> Learning Task 4.1 </a>
        </div>
    </div>
</div>

<div class="content">
	<?php
		switch ($module)
		{
            case 'lt22':
                ?>
                    <p style="font-size: 25px; margin-top: 25px; text-align: center; font-family: 'Staatliches'; color: #183c64">ROTATE</style>
                    <p class="codepen" data-height="265" data-theme-id="light" data-default-tab="html,result" data-user="yeshuya" data-slug-hash="rNezaar" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Rotate">
                    <span>See the Pen <a href="https://codepen.io/yeshuya/pen/rNezaar">
                    CSS Rotate</a> by Yeshuya (<a href="https://codepen.io/yeshuya">@yeshuya</a>)
                    on <a href="https://codepen.io">CodePen</a>.</span>
                    </p>
                    <script async src="https://static.codepen.io/assets/embed/ei.js"></script>

                    <p style="font-size: 25px; margin-top: 25px; text-align: center; font-family: 'Staatliches'; color: #183c64">SCALE</style>
                    <p class="codepen" data-height="384" data-theme-id="light" data-default-tab="css,result" data-user="yeshuya" data-slug-hash="mdPMyee" style="height: 384px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Scale">
                    <span>See the Pen <a href="https://codepen.io/yeshuya/pen/mdPMyee">
                    CSS Scale</a> by Yeshuya (<a href="https://codepen.io/yeshuya">@yeshuya</a>)
                    on <a href="https://codepen.io">CodePen</a>.</span>
                    </p>
                    <script async src="https://static.codepen.io/assets/embed/ei.js"></script>

                    <p style="font-size: 25px; margin-top: 25px; text-align: center; font-family: 'Staatliches'; color: #183c64">SKEW</style>
                    <p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="yeshuya" data-slug-hash="xxVLbwM" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Skew">
                    <span>See the Pen <a href="https://codepen.io/yeshuya/pen/xxVLbwM">
                    CSS Skew</a> by Yeshuya (<a href="https://codepen.io/yeshuya">@yeshuya</a>)
                    on <a href="https://codepen.io">CodePen</a>.</span>
                    </p>
                    <script async src="https://static.codepen.io/assets/embed/ei.js"></script>

                    <p style="font-size: 25px; margin-top: 25px; text-align: center; font-family: 'Staatliches'; color: #183c64">TRANSLATE</style>
                    <p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="yeshuya" data-slug-hash="ZEWJYQR" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Translate">
                    <span>See the Pen <a href="https://codepen.io/yeshuya/pen/ZEWJYQR">
                    CSS Translate</a> by Yeshuya (<a href="https://codepen.io/yeshuya">@yeshuya</a>)
                    on <a href="https://codepen.io">CodePen</a>.</span>
                    </p>
                    <script async src="https://static.codepen.io/assets/embed/ei.js"></script>
                <?php
            break;
            case 'lt23':
                ?>
                    <p style="font-size: 25px; margin-top: 25px; text-align: center; font-family: 'Staatliches'; color: #183c64">SWINGING PICTURE</style>
                    <p class="codepen" data-height="421" data-theme-id="light" data-default-tab="css,result" data-user="yeshuya" data-slug-hash="ExKQWxN" style="height: 421px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Swinging Picture">
                    <span>See the Pen <a href="https://codepen.io/yeshuya/pen/ExKQWxN">
                    Swinging Picture</a> by Yeshuya (<a href="https://codepen.io/yeshuya">@yeshuya</a>)
                    on <a href="https://codepen.io">CodePen</a>.</span>
                    </p>
                    <script async src="https://static.codepen.io/assets/embed/ei.js"></script>

                    <p style="font-size: 25px; margin-top: 25px; text-align: center; font-family: 'Staatliches'; color: #183c64">BUTTON</style>
                    <p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="yeshuya" data-slug-hash="RwaQKOQ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Download Button">
                    <span>See the Pen <a href="https://codepen.io/yeshuya/pen/RwaQKOQ">
                    Download Button</a> by Yeshuya (<a href="https://codepen.io/yeshuya">@yeshuya</a>)
                    on <a href="https://codepen.io">CodePen</a>.</span>
                    </p>
                    <script async src="https://static.codepen.io/assets/embed/ei.js"></script>

                <?php
            break;
            case 'lt32':
                ?>
                    <p style="font-size: 25px; margin-top: 25px; text-align: center; font-family: 'Staatliches'; color: #183c64">TRANSITION</style>
                    <p class="codepen" data-height="358" data-theme-id="light" data-default-tab="css,result" data-user="yeshuya" data-slug-hash="OJNQaOz" style="height: 358px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Transitions">
                    <span>See the Pen <a href="https://codepen.io/yeshuya/pen/OJNQaOz">
                    CSS Transitions</a> by Yeshuya (<a href="https://codepen.io/yeshuya">@yeshuya</a>)
                    on <a href="https://codepen.io">CodePen</a>.</span>
                    </p>
                    <script async src="https://static.codepen.io/assets/embed/ei.js"></script>

                    <p style="font-size: 25px; margin-top: 25px; text-align: center; font-family: 'Staatliches'; color: #183c64">ANIMATION</style>
                    <p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="yeshuya" data-slug-hash="OJNQaQQ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Animations">
                    <span>See the Pen <a href="https://codepen.io/yeshuya/pen/OJNQaQQ">
                    CSS Animations</a> by Yeshuya (<a href="https://codepen.io/yeshuya">@yeshuya</a>)
                    on <a href="https://codepen.io">CodePen</a>.</span>
                    </p>
                    <script async src="https://static.codepen.io/assets/embed/ei.js"></script>
                <?php
            break;
            case 'lt33':
                ?>
                    <p style="font-size: 25px; margin-top: 25px; text-align: center; font-family: 'Staatliches'; color: #183c64">NAVIGATION BAR </style>
                    <p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="yeshuya" data-slug-hash="qBZxQGR" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Navigation Bar">
                    <span>See the Pen <a href="https://codepen.io/yeshuya/pen/qBZxQGR">
                    Navigation Bar</a> by Yeshuya (<a href="https://codepen.io/yeshuya">@yeshuya</a>)
                    on <a href="https://codepen.io">CodePen</a>.</span>
                    </p>
                    <script async src="https://static.codepen.io/assets/embed/ei.js"></script>

                    <p style="font-size: 25px; margin-top: 25px; text-align: center; font-family: 'Staatliches'; color: #183c64">SOCIAL MEDIA ICONS </style>
                    <p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="yeshuya" data-slug-hash="rNeJoNO" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Social Media">
                    <span>See the Pen <a href="https://codepen.io/yeshuya/pen/rNeJoNO">
                    Social Media</a> by Yeshuya (<a href="https://codepen.io/yeshuya">@yeshuya</a>)
                    on <a href="https://codepen.io">CodePen</a>.</span>
                    </p>
                    <script async src="https://static.codepen.io/assets/embed/ei.js"></script>
                <?php
            break;
            case 'lt41':
                ?>
                    <p style="font-size: 25px; margin-top: 25px; text-align: center; font-family: 'Staatliches'; color: #183c64">CSS ANIMATIONS</style>
                    <p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="yeshuya" data-slug-hash="VwaGNxL" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Identity V Text w/ Animation">
                    <span>See the Pen <a href="https://codepen.io/yeshuya/pen/VwaGNxL">
                    Identity V Text w/ Animation</a> by Yeshuya (<a href="https://codepen.io/yeshuya">@yeshuya</a>)
                    on <a href="https://codepen.io">CodePen</a>.</span>
                    </p>
                    <script async src="https://static.codepen.io/assets/embed/ei.js"></script>
                <?php
            break;
        }
	?>	
</div>	