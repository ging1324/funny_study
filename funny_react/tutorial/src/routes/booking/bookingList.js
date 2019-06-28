import React, { Component } from 'react';
import '../../style/booking.css';

class bookingList extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            bookingListData:[],
            defaultBooking: [8,9,10,11,12,13,14,15,16,17,18,19,20],
            active:''
        }
    }

    render(){
        return (
            <div>
                booking
                <div className="bookingList">
                {this.state.defaultBooking.map((v, i) => {
                    return(
                    <ul>
                        <li onClick={(e) => this.setBooking(v)} id={'time_' + v} className={'time_' + v+' time ' + this.state.active}>{v}</li>
                    </ul>
                    )
                })}
                </div>
            </div>
        )
    }

    componentDidMount(){
        this.getBookingList();

    }
    getBookingList = async() => {
        console.info('bookingList');
    }

    setBooking = (time) => {
        console.info('time : ', document.getElementById('time_'+time).classList.contains( 'active' ));

        if(document.getElementById('time_'+time).classList.contains( 'active' ) === true){
            document.getElementById('time_'+time).classList.remove( 'active' )
        }else{
            document.getElementById('time_'+time).className="active";

        }
        // if(document.getElementById('time_'+time)){

        // }
        // this.setState({
        //     active:'active'
        // })
    }

}export default bookingList