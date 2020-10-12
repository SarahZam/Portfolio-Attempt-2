import React from "react";
import Carousel from 'react-elastic-carousel';
import checker from'../assets/images/checker.jpg';
import pong from '../assets/images/pong.png';
import snake from '../assets/images/snake.jpg';
import two from '../assets/images/two.jpg';
import tictactoe from '../assets/images/tictactoe.jpg';

import ProjectCards from "./ProjectCards";
const games = [
    {
        id: 0,
        title: 'Checkers',
        img: checker,
        description: 'Checkers game with an AI opponent. Implemented minimax, minimax with Heuristics and alphabeta for the AI.',
        link: 'https://github.com/SarahZam/Checkers-'
    },
    {
        id: 1,
        title: 'Pong',
        img: pong,
        description: 'A game of pong made with Java Graphics. You have 1 minute to make sure the ball doesn\'t touch the ground. Catch letters for extra points!',
        link: 'https://github.com/SarahZam/Pong'
    },
    {
        id: 2,
        title: 'Snake Game',
        img: snake,
        description: 'Remember that snake game we used to play 24/7 in our parents\' Nokia phone in the 2000s? Major nostalgic flashback. Implemented in Java and GUI.',
        link: 'https://github.com/SarahZam/Snake-game'

    },
    {
        id: 3,
        title: '2048',
        img: two,
        description: 'That 2048 game we used to play when we were kids? Mostly made it to practice Data Structures and Object Oriented Programming',
        link:'https://github.com/SarahZam/2048'
    },
    {
        id: 4,
        title: 'Tic Tac Toe',
        img: tictactoe,
        description: 'Implemented Tic Tac Toe game using adversial search approach. Implemented an AI component using minimax.',
        link: 'https://github.com/SarahZam/TicTacToe'
    }
]


function GameProject () {

    const makeGame = (games) => {
        return games.map(game => {
            return <ProjectCards game={game} key={game.id} />
        })
    }

    const breakPoints = [
        {width: 500, itemsToShow: 1},
        {width: 768, itemsToShow: 2},
        {width: 1200, itemsToShow: 3},
        {width: 1500, itemsToShow: 4}
    ];

    return(
        <Carousel className="" breakPoints={breakPoints}>
                {makeGame(games)}
        </Carousel>
    )

}

export default GameProject;
