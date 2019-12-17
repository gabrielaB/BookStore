import React, { Component } from 'react';

const LEFT = 'LEFT';
const RIGHT = 'RIGHT';

export class Carousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            boxes: [],
            carouselStyle: {
                translateX: props.config.boxWidth * props.config.boxesOnSlide,
                transition: 'all 0.3s ease-in-out'
            },
            boxesOnSlide: 2, //default value
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
                    overflow: 'hidden'
                },
                arrow: {
                    position: 'absolute',
                    top: '50%',
                    width: '1em',
                    height: '3em',
                    fontSize: '1.5em',
                    transform: 'translateY(-50%)',
                    lineHeight: '3em',
                    padding: '0 0.2em',
                    cursor: 'pointer',
                    color: '#5B86E5',
                    opacity: 0.5,
                    zIndex: 100,
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

    componentDidUpdate(prevProps, prevState) {
        if (this.props.children && this.state.boxes.length === 0) {
            this.setState(() => {
                return {
                    boxes: [...this.props.children],
                    boxesOnSlide: this.props.config.boxesOnSlide,
                    carouselStyle: {
                        translateX: -this.props.config.boxWidth * this.state.boxesOnSlide,
                        transition: `all ${this.props.config.transitionDuration} ease-in-out`
                    }
                };
            });
        }

        if (this.props.config.boxesOnSlide !== prevState.boxesOnSlide) {
            this.setState(() => {
                return {
                    boxesOnSlide: this.props.config.boxesOnSlide,
                    styles: {
                        ...this.state.styles,
                        wrapper: {
                            position: 'relative',
                            width: `${this.props.config.boxWidth * this.props.config.boxesOnSlide}px`,
                            margin: 'auto',
                            overflow: 'hidden'
                        }
                    }
                };
            });
        }
    }

    /**
     * This method changes rendered book on the slide
     * changing the position of the boxes in the state 
     * @param event 
     */
    changeSlide(event) {
        const { boxWidth, transitionDuration } = this.props.config;
        const { boxesOnSlide } = this.state;
        const isLeft = event.currentTarget.getAttribute('arrow') === "LEFT";
        const isRight = event.currentTarget.getAttribute('arrow') === "RIGHT";
        if (isLeft) {
            this.setState(() => ({
                carouselStyle: {
                    translateX: this.state.carouselStyle.translateX + boxWidth * boxesOnSlide,
                    transition: `all ${transitionDuration}ms ease-in-out`
                }
            }), () => {
                setTimeout(() => {
                    this.setState((prevState) => {
                        const boxes = [...prevState.boxes];
                        const last = boxes.slice(boxes.length - boxesOnSlide);
                        return {
                            carouselStyle: {
                                translateX: this.state.carouselStyle.translateX - boxWidth * boxesOnSlide,
                                transition: 'none'
                            },
                            boxes: [...last, ...boxes.slice(0, boxes.length - boxesOnSlide)]
                        };
                    });
                }, transitionDuration);
            });
        }
        if (isRight) {
            this.setState(() => ({
                carouselStyle: {
                    translateX: this.state.carouselStyle.translateX - boxWidth * boxesOnSlide,
                    transition: `all ${transitionDuration}ms ease-in-out`
                }
            }), () => {
                setTimeout(() => {
                    this.setState((prevState) => {
                        const boxes = [...prevState.boxes];
                        const first = boxes.slice(0, boxesOnSlide);
                        return {
                            carouselStyle: {
                                translateX: this.state.carouselStyle.translateX + boxWidth * boxesOnSlide,
                                transition: 'none'
                            },
                            boxes: [...boxes.slice(boxesOnSlide), ...first]
                        };
                    });
                }, transitionDuration);
            });
        }
    }

    render() {
        const { arrow, carousel, next, prev, wrapper } = this.state.styles;
        const { boxes, carouselStyle } = this.state;
        return (
            <div className="carousel-wrapper" style={wrapper}>
                <a onClick={this.changeSlide} arrow={LEFT}>
                    <i style={{
                        ...prev,
                        ...arrow
                    }}
                        aria-hidden="true">{'<'}
                    </i>
                </a>
                <div className="carousel"
                    style={{
                        ...carousel,
                        transform: `translateX(${carouselStyle.translateX}px)`,
                        transition: carouselStyle.transition
                    }}>
                    {boxes}
                </div>
                <a onClick={this.changeSlide} arrow={RIGHT}>
                    <i style={{
                        ...next,
                        ...arrow
                    }}
                        aria-hidden="true">{'>'}
                    </i>
                </a>
            </div>
        );
    }
};

export default Carousel;
