// Themes: pride, christmas, new_years, monochrome_dark, monochrome_light
initialize();

function setTheme(newTheme)
{
    document.getElementById('theme').href = ("themes/" + newTheme + ".css");
}

function initialize()
{
    let d = new Date()
    let currentMonth = d.getMonth();
    let currentDate = d.getDate();

    /***** Theme Months *****/
    if(currentMonth == 0)
    {
        if(currentDate == 1)
        {
            /* New Years */
            setTheme("monochrome_light");
        }
    }
    else if(currentMonth == 5)
    {
        /* LGBT Pride */
        setTheme("pride");
    }
    else if(currentMonth==11)
    {
        if(currentDate <= 25)
        {
            /* Christmas */
            setTheme("christmas");
        }
        else if(currentDate == 31)
        {
            /* New Years */
            setTheme("monochrome_light");
        }
    }
}