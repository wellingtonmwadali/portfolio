//responses
function getBotResponse(input){
    if(input == "hello"){
        return "Hey there!"
    }else if(input == "more") {
        return "Hi,my abilities are limited to the following prompts :\n-Intro.\n-Navigation.\n-Game.\n-Profiles.\n-Humour.\n-Kwaheri.Start with a 'hello though"
    }
    else if(input == "Intro"){
        return "My name is Chao.I identify myself as a feminine character.My purpose is to act as your guide within my abilities.Use options as prompts for more info "
    }
    else if(input == "Navigation"){
        return "page one or page two ?"
    }
    else if(input == "page one"){
        return "Input the hint '1010101' to view the page from a different angle.Welcome to the world of animations."
    }
    else if(input == "page two"){
        return "The page is divided into different sections.To view the complete site resize the width of your screen then view in complete window the game or projects file."
    }
    else if(input == "Game"){
        return "The rules for the game as stated is you pick a range numbers,feel free to go wild with numbers.The range of numbers will determine the number of attempts.If you exhaust your attempts you will be prompted to try again.GOOD LUCKYou can try your luck with my game.Click index after you are done."
    }
    else if (input == "Profiles"){
        return "github, linkedin or twitter? "
    }
    else if (input == "github"){
        return "https://github.com/wellingtonmwadali"
    }
    else if (input == "linkedin"){
        return "https://www.linkedin.com/in/wellington-mwadali-/"
    }
    else if (input == "twitter"){
        return "https://twitter.com/mwadzaliii"
    }
    else if (input == "Humour"){
        return "dry, dark or intelligent?"
    }
    else if(input == "dry"){
        return "Doctor at my check up asked me if I had 'any feelings of depression or anxiety'and I said 'don't we all'and she said 'no'"
    }
    else if(input == "dark"){
        return "Want to turn your depression to profit,wake up at noon so you can only pay for two meals a day "
    }
    else if(input == "intelligent"){
        return "A biologist, a chemist, and a statistician are out hunting. The biologist shoots at a deer and misses 5 feet to the left. The chemist takes a shot and misses 5 feet to the right. The statistician yells, “We got ‘em!”"
    }
    else if (input == "Kwaheri"){
        return "This is where we part ways.Nice time :)"
    }
    else{
        return "Please try again or type 'more' for a list of available prompts"
    }
}