import React, { Component } from "react"

class MemeGenerator extends Component 
{
    constructor() {
        super();
        this.state = {
          topText: '',
          bottomText: '',
          randomImg: 'http://i.imgflip.com/1bij.jpg',
          allMemeImgs: []
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
      }

      componentDidMount() { //ensure that data is fetched at the beginning
        fetch("https://api.imgflip.com/get_memes") //call to URL
          .then(response => response.json()) //turn promise into JS object
          .then(response => {
        const { memes } = response.data //pull memes array from response.data
        
        this.setState({ allMemeImgs: memes }) // set allMemeImgs state
      })
      }

      handleChange(event) {
        const {name, value} = event.target
        this.setState({ [name]: value })

    }

    handleSubmit(event) {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemeImg = this.state.allMemeImgs[randNum].url
        this.setState({ randomImg: randMemeImg })
      }

    render() {
        return (
          <div>
            <form className="meme-form" onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="topText"
                placeholder="Top Text"
                value={this.state.topText}
                onChange={this.handleChange}
              />
              <input
                type="text"
                name="bottomText"
                placeholder="Bottom Text"
                value={this.state.bottomText}
                onChange={this.handleChange}
              />
              <button>Gen</button>
            
            <div className='meme'>
                <img src={this.state.randomImg} alt='' />
                <h2 className='top'>{this.state.topText}</h2>
                <h2 className='bottom'>{this.state.bottomText}</h2>
            </div>
            </form>
          </div>
        )
      }

}

export default MemeGenerator