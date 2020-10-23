<style>
    .container_svg{
        margin-left: 378px;
        font-family: "Staatliches";
    }

    .content_svg{
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

<div class="container_svg">
	<div class="dropdown">
        <button class="dropbtn">Module 5</button>
        <div class="dropdown-content">
            <a href="https://svg-panganiban.herokuapp.com/" target="_blank"> Learning Task 5.1 </a>	
        </div>
    </div>
    <div class="dropdown">
        <button class="dropbtn">Module 6</button>
        <div class="dropdown-content">
            <a href="index.php?page=svg&module=lt61"> Learning Task 6.1 </a>
            <a href="index.php?page=svg&module=lt62"> Learning Task 6.2 </a>	
        </div>
    </div>
</div>

<div class="content_svg">
	<?php
		switch ($module)
		{
            case 'lt61':
                ?>
                    <p style="font-size: 25px; margin-top: 25px; text-align: center; font-family: 'Staatliches'; color: #183c64">TEXT PATH</style>
                    <p class="codepen" data-height="381" data-theme-id="light" data-default-tab="html,result" data-user="yeshuya" data-slug-hash="zYBodOW" style="height: 381px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Text Path">
                    <span>See the Pen <a href="https://codepen.io/yeshuya/pen/zYBodOW">
                    Text Path</a> by Yeshuya (<a href="https://codepen.io/yeshuya">@yeshuya</a>)
                    on <a href="https://codepen.io">CodePen</a>.</span>
                    </p>
                    <script async src="https://static.codepen.io/assets/embed/ei.js"></script>
                <?php
            break;
            case 'lt62':
                ?>
                    <p style="font-size: 25px; margin-top: 25px; text-align: center; font-family: 'Staatliches'; color: #183c64">SVG ANIMATION</style>
                    <p class="codepen" data-height="418" data-theme-id="light" data-default-tab="html,result" data-user="yeshuya" data-slug-hash="GRqNOKB" style="height: 418px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="SVG Animation">
                    <span>See the Pen <a href="https://codepen.io/yeshuya/pen/GRqNOKB">
                    SVG Animation</a> by Yeshuya (<a href="https://codepen.io/yeshuya">@yeshuya</a>)
                    on <a href="https://codepen.io">CodePen</a>.</span>
                    </p>
                    <script async src="https://static.codepen.io/assets/embed/ei.js"></script>
                <?php
            break;

        }
    ?>
</div>