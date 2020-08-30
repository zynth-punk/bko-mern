import React from "react";
import { Container, Row } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

function Post0003() {
  return (
    <Container style={{ marginBottom: "15vmin" }}>
      <Row style={{ display: "flex", alignItems: "baseline" }}>
        <h6>August 20th 2020</h6>
      </Row>
      <Row>
        <h1>
          <span id="PostHeader">Life up to this point</span>
        </h1>
      </Row>
      <Row>
        <div style={{ margin: "2vmin" }}>
          <p>
            For the past days, I've been working on getting this website working
            how it's supposed to. I started with Django at the beginning of the
            year and now I'm using Node.js. So far I've still not gotten to the
            point where my tiny blog or personal brand (I'm still not even sure
            what I would want this to be) should be like. Part of me is afraid
            of talking about my life without some sort of repecusion, but where
            I come from is not an easy place. Talking about the things I
            experience is a way for me to come to terms with this things. It
            gives insight into why I'm driven the way I am, why I search for
            truth and understanding of things above all else.
          </p>
          <p>
            A lot of people are proud of being Cuban, but I don't think I'm
            proud. At least not in the way most cubans that you would meet are
            proud. Don't get me wrong, there is a lot of learning you do in
            Cuba. You learn about people, about what drives them to do things.
            You learn about unconditional love regardless of materialistic
            things. but what you don't learn about is about technology, as an
            island, Cuba is very underdevelopt and it doesn't try to be more
            than that.
          </p>
          <p>
            My father, a swiss, always wondered why leave his son in a island
            with so little opportunity, "What sort of uneducated goofball is he
            going to become if he grows up there?" Well glady I didn't grew up
            uneducated thanks to him and thanks to the education in Cuba. But
            the opportunities to learn in fields such as computer science,
            electrical engineering, and even music production, are limited in
            Cuba. When I received my first computer, there was no internet
            router to hook it up to, no way of knowning what is out there in the
            rest of the world. While I did get to play video games and see what
            the computer was able to do, Information about the outside world was
            scarce in the island, and tained with the communist world view.
          </p>
          <p>
            One of the first things I found when I left cuba was the internet.
            For some kids they are born with internet, I was discovered by it.
            The internet found me when I was 14 years old, and at the time I
            didn't know what the hell it was about, all i knew is that i could
            find any sort of funny videos in it. Life had taken a weird turn, I
            immidiately started pouring hours after hours, over the internet,
            world events that I had known about had been tainted with hints of
            communist ideals. Ideals that are hard to separate from the ones
            that you personally associate with. They are so built into you that
            it's hard to let them go and to find who we trully are inside.
          </p>
        </div>
      </Row>
    </Container>
  );
}

export default Post0003;
