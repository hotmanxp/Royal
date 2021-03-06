/**
 * @desc Royal组件演示 Spin加载中
 * @author Jafeney
 * @dateTime 2016-07-07
 **/

import React, { Component } from 'react'
import { Row, Col } from '../../components/Basic/Layout/'
import Button from '../../components/FormControls/Button/'
import Spin from '../../components/Other/Spin/'

class DemoSpin extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='wrapper'>
                <h2 className='fixed'>Spin 加载中组件</h2>
                <div className='content'>
                    <h3>组件演示</h3>
                    <div>
                        <Row>
                            <Col><Button type={'primary'} text="加载中..." callback={()=>this.spin.show()} /></Col>
                        </Row>
                    </div>
                    <hr />
                    <h3>API</h3>
                    <div>
                        <ul className='api-list'>
                            <li>
                                <strong>style</strong>
                                <span>组件内敛样式</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <Spin ref={(ref)=>this.spin=ref} />
            </div>
        )
    }
}

export default DemoSpin
