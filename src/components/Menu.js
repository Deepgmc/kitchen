import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'


class Menu extends React.Component {
    static propTypes = {
        dishes: PropTypes.array
    }

    render() {
        const {dishes} = this.props
        return (
            <div className="container-fluid">
                {dishes.map((dish) => {
                    return <div>{dish.name}</div>
                })}
            </div>
        )
    }
}

export default connect(
    (store) => { //запихнем кусок стора в пропсы текущего компонента
        return {
            dishes: store.menu.dishes
        }
    },
    {//экшн креэйторы запихнем в коннекст, они будут доступны в props

    }
)(Menu)