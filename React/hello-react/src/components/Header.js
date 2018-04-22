import React, {Component} from 'react';

//无状态组件, 没有state
// const Header = (props) => {
    
//     return(
//         <div className="container">
//             <div className="row">
//                 <div className="col-xs-1 col-xs-offset-11">
//                 <h1>Header</h1>
//                 </div>
//                 {props.headerValue}
//             </div>
//         </div>
//     );
// }

//-----The following way is still working ---------

class Header extends Component{
    render(){
        var theStyle ={border:'1px solid blue'}
        return(
            <div style={theStyle} className="container">
                <div className="row">
                    <div className="col-xs-1 col-xs-offset-11">
                    <h1>Header</h1>
                    </div>
                    {this.props.valueToHeader}
                </div>
            </div>
        );
    }
}


export default Header;