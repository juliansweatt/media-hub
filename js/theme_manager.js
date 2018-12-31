var themes = [
    "christmas", 
    "halloween", 
    "independence", 
    "monochrome_dark", 
    "monochrome_light", 
    "pride", 
    "valentine"
];

var currentTheme = "pride";

initialize();

function setTheme(newTheme)
{
    document.getElementById('theme').href = ("themes/" + newTheme + ".css");
    currentTheme = newTheme;
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
    else if(currentMonth == 1)
    {
        if(currentDate <= 14)
        {
            /* Valentine's Day */
            setTheme("valentine");
        }
    }
    else if(currentMonth == 5)
    {
        /* LGBT Pride */
        setTheme("pride");
    }
    else if(currentMonth == 6)
    {
        if(currentDate == 4)
        {
            /* Independence Day */
            setTheme("independence");
        }
    }
    else if(currentMonth == 9)
    {
        /* Halloween */
        setTheme("halloween");
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

function nextTheme()
{
    let currentIndex = themes.indexOf(currentTheme);

    if( currentIndex < themes.length-1 )
    {
        setTheme(themes[currentIndex+1]);
    }
    else
    {
        setTheme(themes[0]);
    }
}