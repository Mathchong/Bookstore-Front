import { Container, Header, Title} from "./style";
import { IoMdPerson, IoMdCart, IoMdMenu } from "react-icons/io";

export default function HomePage() {
    return (
        <Container>
            <Header>
                <section>
                    <IoMdMenu size={20} color={"#00265d"} />
                </section>
                <Title>BookStore</Title>
                <section>
                    <IoMdCart size={20} color={"#00265d"}  />
                    <IoMdPerson size={20} color={"#00265d"}  />
                </section>

            </Header>
        </Container>
    )
}