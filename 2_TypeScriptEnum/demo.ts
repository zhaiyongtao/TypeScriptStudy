enum Status {
    OFFLINE,
    ONLINE,
    DELETED
}

function test (x:number):void{
    if(Status.OFFLINE ==x) {
        console.info('OFFLINE')
    } 
    if(Status.ONLINE ==x) {
        console.info('ONLINE')
    } 
    if(Status.DELETED ==x) {
        console.info('DELETED')
    } 
}
test
