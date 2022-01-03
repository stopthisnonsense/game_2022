import './player'
import './board'

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

document.querySelector('.gameboard').appendChild(newPlayer)

const player = document.querySelector( '.player' );


//TODO #2:
function movement(item: any, arrowCode: string): void {
    let element = item.getBoundingClientRect();
    let x,y;
    let bod = document.querySelector( '.gameboard' );
    let bodSize = bod.getBoundingClientRect();
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
        if( x < bodSize.width ) {
            item.style.left = `${x}px`
        }

    }

    if( arrowCode === 'ArrowDown' || arrowCode === 'ArrowUp' ) {
        if( y < bodSize.height ) {
            item.style.top = `${y}px`
        }

    }

    console.log(x,y)
}
function makeSquares() {
    console.log( window.innerWidth, window.innerHeight);
    let bod = document.querySelector( 'body' );
    let bodSize = bod.getBoundingClientRect()
    let boundaries =  16 * 16;
    for( let i = 0; i < boundaries; i++ ) {
        // console.log(i)
        let bod = document.querySelector( '.gameboard' );
        let square = document.createElement( 'div' );
        square.classList.add( 'square')
        if (!bod) return;
        bod.appendChild( square );
    }


}

document.addEventListener( 'keydown', keyDown, false);
window.addEventListener( 'load', () => {
    makeSquares()
})