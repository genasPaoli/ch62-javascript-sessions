const changePrincipalTitle = ( titleId ) => {
    const titleElement = document.getElementById( titleId );
    if ( titleElement ) {
        titleElement.innerText = "OOP in JavaScript, Cohorte 62";
    } else {
        console.warn( `Element with id "${ titleId }" not found.` );
    }
}