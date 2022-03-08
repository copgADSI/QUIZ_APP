import QUIESTIONS_FILM_TELEVISION from "../Quetions/FilmAndTelevision/FilmAndTelevision";

export const handleQuestions_by_category_and_dificult =
    (category, dificult) => {
        switch (category) {
            case "Film and Television":
                QUIESTIONS_FILM_TELEVISION.filter((quetion) => {
                    if (quetion.Dificult === dificult) {
                        return quetion
                    }
                })
                break;

            default:
                break;
        }
    }