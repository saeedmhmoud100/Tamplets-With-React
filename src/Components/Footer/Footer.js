import React, { Component } from "react";
import axios from "axios";
import { SocialMediaDiv, Social, Icon, Pra, Span1, Span2 } from "./footerStyle";

class Footer extends Component {
  state = {
    social: []
  };

  componentDidMount = _ => {
    axios
      .get("js/data.json")
      .then(res => this.setState({ social: res.data.social }));
  };

  render() {
    return (
      <SocialMediaDiv>
        {this.state.social.map(item => {
          return (
            <Social item={item.id} key={item.id}>
              <Icon className={item.icon} />
              <Pra>
                <Span1>
                  {item.title}
                </Span1>
                <Span2>
                  {item.body}
                </Span2>
              </Pra>
            </Social>
          );
        })}
      </SocialMediaDiv>
    );
  }
}

export default Footer;
