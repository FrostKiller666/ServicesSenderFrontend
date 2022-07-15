import React from "react";
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";

import styles from './MainSiteInformation.module.css'

const MainSiteInformation = () => {
    return (
        <>
            <Container fluid className={styles.container}>
                <h1 className={'fw-bold text-center pb-5 mb-4'}>CO POWINIENEŚ WIEDZIEĆ</h1>

                <Container className={styles.card}>
                <Row>
                    <Col>
                        <h3 className={'text-center fw-bold pb-4'}>Jak używać</h3>
                        <p className={'text-break fs-6 '}>
                            Serices-Sender oferuje nam wysyłanie wiadomości do głównej centrali zamówień by te potem były zrealizowane dla danego punktu, z którego zlecenie zostało zrealizowane. Jak korzustać? To bardzo prostę, wystarczy wybrać z panelu głównego odpowiednią zakłądkę, "Złóż zamówienie", "Twoje Zamówienie", "Zapytaj o dostępność", "Twoje Zapytanie". Po wybraniu aplikacja przekieruje nas do odpowiedniej sekcji i będziemy mogli wykonywać nasze zamówienia bądź sprawdzić te, które zostały przetworzone.
                        </p>
                    </Col>
                    <Col>
                        <Image src={'https://miro.medium.com/max/576/1*7FgTI6QxrfaZdA2DVg3w0g.png'}/>
                    </Col>
                </Row>
                </Container>

                <Container className={styles.cardOdd}>
                    <Row>
                        <Col>
                            <Image  src={'https://miro.medium.com/max/576/1*7FgTI6QxrfaZdA2DVg3w0g.png'}/>
                        </Col>
                        <Col>
                            <h3 className={'text-center fw-bold'}>Jak zacząć</h3>
                            <p className={'text-break fs-6'}>
                                To bradzo proste, aby korzystać z usług musisz w pierwszej kolejności stworzyć bezpłatne konto by mieć dostęp do treści w naszym serwisie. Oczywiście nie musisz się obawiać podawać swojego hasła z racji tego, że jest bezpiecznie przechowywane w naszej bazie danych jako wygenerowany ciąg znaków, dodatkowo zalogowany użtkownik jest chroniony specjalnym tokenem identyfikacyjnym przechowywanym po stronie servera oraz odpowiednio zabezpieczony. Jako użytkonik masz możliwość zmiany swojego hasła oraz nicku, wykorzstując do tego panel w prawym górnym ekranie widooczny jako Twoja nmazwa użytkonika podana przy procesie rejestracji.
                            </p>
                        </Col>
                    </Row>
                </Container>

                <Container className={styles.card}>
                    <Row>
                        <Col>
                            <h3 className={'text-center fw-bold'}>Dlaczego Warto</h3>
                            <p className={'text-break fs-6'}>
                                To bardzo oczywiste, na pewno borykałeś się już wielokrotnie z uciążliwością pisania mozolnych meli aby wykonywać zamówienie. Właśnie tutaj przychodmiy z pomocą i automatyzujemy to za Ciebie. Dzięki naszemu sposobowi wysłania danych masz w pełni zwalidowane informacje, które chceszwysłać, a co za tym idzie? Nie jesteś w stanie popełnić żadnego błędu i możesz cieszyć się z wolnego czasu, który zaoszczędziłeś. Nie martw się nasza usługa pozwala wysyłać kilka zgłoszeń jednocześnie. Zatem nie marnuj czasu i wyślij swoje pierwsze zamówienie.
                            </p>
                        </Col>
                        <Col >
                            <Image src={'https://miro.medium.com/max/576/1*7FgTI6QxrfaZdA2DVg3w0g.png'}/>
                        </Col>
                    </Row>
                </Container>

            </Container>

        </>
    );
}

export {
    MainSiteInformation,
}
