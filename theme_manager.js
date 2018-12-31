// Themes: pride, monochrome_dark, monochrome_light

function setTheme(newTheme)
{
    document.getElementById('theme').href = ("themes/" + newTheme + ".css");
}

function initialize()
{
    let currentMonth = new Date().getMonth();

    /***** Theme Months *****/
    /* Pride Month (June) */
    if(currentMonth == 5)
    {
        setTheme("pride")
    }
}