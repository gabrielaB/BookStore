import React, { Component, Fragment } from 'react';

import { QUESTIONS_MAX } from '../constants/constants';

const LEFT = 'LEFT';
const RIGHT = 'RIGHT';

export class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      boxes: [...props.boxes],
      carouselStyle: {
        translateX: 0,
        transition: 'all 0.3s ease-in-out'
      },
      activeBox: 0,
      boxesOnSlide: 1, //default value
      styles: {
        carousel: {
          height: `${props.config.carouselHeight}px`,
          display: 'flex',
          float: 'left'
        },
        wrapper: {
          position: 'relative',
          width: `${props.config.boxWidth * props.config.boxesOnSlide}px`,
          margin: 'auto',
          marginTop: '15px',
          overflow: 'hidden'
        },
        arrow: {
          width: '1em',
          fontSize: '1.5em',
          transform: 'translateY(-50%)',
          cursor: 'pointer',
          color: '#5B86E5',
          transition: 'opacity 0.1s linear'
        },
        prev: {
          left: 0
        },
        next: {
          right: 0
        }
      }
    };

    this.changeSlide = this.changeSlide.bind(this);
  }

  /**
   * This method changes rendered book on the slide
   * changing the position of the boxes in the state
   * @param event
   */
  changeSlide(event) {
    const { boxWidth, transitionDuration } = this.props.config;
    const { boxesOnSlide } = this.state;
    const isLeft = event.currentTarget.getAttribute('arrow') === 'LEFT';
    const isRight = event.currentTarget.getAttribute('arrow') === 'RIGHT';
    if (isLeft) {
      this.setState(() => ({
        carouselStyle: {
          translateX:
            this.state.carouselStyle.translateX + boxWidth * boxesOnSlide,
          transition: `all ${transitionDuration}ms ease-in-out`
        },
        activeBox: this.state.activeBox - 1
      }));
    }
    if (isRight) {
      this.setState(() => ({
        carouselStyle: {
          translateX:
            this.state.carouselStyle.translateX - boxWidth * boxesOnSlide,
          transition: `all ${transitionDuration}ms ease-in-out`
        },
        activeBox: this.state.activeBox + 1
      }));
    }
  }

  render() {
    const { arrow, carousel, next, prev, wrapper } = this.state.styles;
    const { carouselStyle } = this.state;
    return (
      <div className="carousel-wrapper" style={wrapper}>
        <div className="arrow-wrapper">
          <a onClick={this.changeSlide} className="left-arrow" arrow={LEFT}>
            <i
              style={{
                ...prev,
                ...arrow
              }}
              aria-hidden="true"
            >
              {'<'}
            </i>
          </a>
          <span className="question-title">
            {this.props.boxes[this.state.activeBox].name}{' '}
          </span>{' '}
          <span>
            ({this.state.activeBox + 1}/{QUESTIONS_MAX})
          </span>
          <a onClick={this.changeSlide} className="right-arrow" arrow={RIGHT}>
            <i
              style={{
                ...next,
                ...arrow
              }}
              aria-hidden="true"
            >
              {'>'}
            </i>
          </a>
        </div>
        <div
          className="carousel"
          style={{
            ...carousel,
            transform: `translateX(${carouselStyle.translateX}px)`,
            transition: carouselStyle.transition
          }}
        >
          {this.state.boxes.map(box => {
            return (
              <div key={box.title} className="box">
                <p className="question-text">{box.question}</p>
                {box.answers.map(answer => {
                  return (
                    <div className="radio-buttons" key={answer + box.question}>
                      <input
                        type={box.type}
                        name={box.type === 'radio' ? box.question : box.answer}
                        value={answer}
                        id={`${answer}${box.answers.indexOf(answer)}`}
                      />
                      <label
                        htmlFor={`${answer}${box.answers.indexOf(answer)}`}
                      >
                        {answer}
                      </label>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <button className="weiter-button">Weiter</button>
      </div>
    );
  }
}

export default Carousel;
