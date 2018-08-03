import React from 'react'

import {make_link,tuiguang_static} from "../static/links"
import infos,{defaultWeb,defaultDate} from '../static/infos'
import './css/index.less'



export default class Container extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      initDom: false
    }
  }

  componentDidMount() {
    let {web = defaultWeb, data = defaultDate} = this.props.match.params
    let info = infos[data] ? infos[data] : {}
    let {teacher, color, top} = info
    let url = make_link(web, teacher)

    if (url) {
      this.setState({
        initDom: true,
        color,
        bg:data,
        url,
        top
      })
    }
    else {
      this.props.history.push('\/')
    }
  }

  render() {
    let {color, bg, url, initDom, top} = this.state
    return initDom ?
      <div className="container" style={{background: color}}>
        <img src={`${tuiguang_static}/${bg}.jpg`} alt=""/>
        <a href={url} style={{top: top}}/>
      </div> :
      <div/>
  }
}
