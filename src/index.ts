import './player'

const keyDown = (e: { code: string }) => {
    if( e.code === 'ArrowUp' || e.code === 'ArrowDown' || e.code === 'ArrowLeft' || e.code === 'ArrowRight') {
        logKey(e.code)
        if( player ) {
           movement(player, e.code)
        }

    }

    function logKey( key: string ): void {
        console.log(key)

    }
    return;
}

const newPlayer = document.createElement( 'div' )
newPlayer.classList.add('player')

document.querySelector('body').appendChild(newPlayer)

const player = document.querySelector( '.player' );


function movement(item: any, arrowCode: string): void {
    let element = item.getBoundingClientRect();
    let x,y;
    if( element && x == undefined && y == undefined ) {
        x = element.left
        y = element.top
     }

    // console.log( arrowCode)
    if( arrowCode === undefined || item === undefined ) return
    if( arrowCode === 'ArrowUp' ) {
        y = y - 16
    }
    if (arrowCode === 'ArrowDown') {
        y = y + 16
    }
    if( arrowCode === 'ArrowLeft') {
        x = x - 16
    }
    if( arrowCode ===  'ArrowRight') {
        x = x + 16
    }
    if( x < 8 || y < 8 ) {
        return;
    }
    if( arrowCode === 'ArrowRight' || arrowCode === 'ArrowLeft' ) {
        item.style.left = `${x}px`
    }

    if( arrowCode === 'ArrowDown' || arrowCode === 'ArrowUp' ) {
        item.style.top = `${y}px`
    }

    console.log(x,y)
}

document.addEventListener( 'keydown', keyDown, false);