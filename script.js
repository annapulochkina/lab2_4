header__heading__id.onmouseover=function(event){header__img1__id.style.backgroundColor= 'black'};

header__heading__id.onmouseover=function(event)
{
    document.getElementById("header__img1__id").className+=" header__block__hover1"
    document.getElementById("header__img2__id").className+=" header__block__hover2"
}

header__heading__id.onmouseout=function(event)
{
    document.getElementById("header__img1__id").className="header__img img__h__1"
    document.getElementById("header__img2__id").className="header__img img__h__2"
}