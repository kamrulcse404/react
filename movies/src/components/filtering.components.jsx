import React from 'react';

const Filter = ({ filteredItems, onClick, selectedItem }) => {
    return (
        <div className='col-lg-2'>
            <ul className="list-group">
            {
                filteredItems.map((item) => (<li
                    style={{ cursor: 'pointer' }}
                    onClick={ () => onClick(item.name) }
                    key={ item._id }
                    className={ selectedItem === item.name ?  "list-group-item active" : "list-group-item" }>
                        { item.name }
                    </li>))
            }
            </ul>
        </div>
    );
}

export default Filter;

// class Filter extends Component {

//     render() { 
//         const { filteredItems, onClick, selectedItem } = this.props;
//         return (
//             <div className='col-lg-2'>
//                 <ul className="list-group">
//                 {
//                     filteredItems.map((item) => (<li
//                         style={{ cursor: 'pointer' }}
//                         onClick={ () => onClick(item.name) }
//                         key={ item._id }
//                         className={ selectedItem === item.name ?  "list-group-item active" : "list-group-item" }>
//                             { item.name }
//                         </li>))
//                 }
//                 </ul>
//             </div>
//         );
//     }
// }

// export default Filter;