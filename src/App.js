import WordExpander from "./TextExpander/WordExpander";
import LetterExpander from "./TextExpander/LetterExpander";
import StarRating from "./StarRating/StarRating";
import { Sample } from "./StarRating/StarRating";
import "./App.css";

function App() {
  return (
    <>
      <h2>Word Expander</h2>
      <WordExpander
        wordsNumToShow={20}
        isCollapsedAtBeginning={true}
        btnPreFix=""
        collapseBtnText=" <= collapse"
        expandBtnText=" => expand"
        btnColor="lightCoral"
        textDecoration="none"
        isBtnInline={true}
        containerClassName="sample"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ipsa
        culpa dolorem, a fugiat ducimus, esse dolore sint ex cupiditate ad
        tempore ipsum obcaecati id placeat quis tempora inventore neque.
      </WordExpander>
      <WordExpander
        wordsNumToShow={10}
        isCollapsedAtBeginning={true}
        collapseBtnText="show less"
        expandBtnText="show more"
        btnColor="lightblue"
        textDecoration="underline"
        isBtnInline={true}
        containerClassName="sample"
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam sunt
        quam, eaque nostrum amet libero vel maxime? Inventore officiis sequi,
        aut laudantium dolore molestias natus iste voluptate pariatur voluptatem
        voluptatibus?
      </WordExpander>
      <WordExpander
        wordsNumToShow={28}
        isCollapsedAtBeginning={false}
        btnPreFix=" ... "
        collapseBtnText="less"
        expandBtnText="more"
        btnColor="inherit"
        textDecoration="underline"
        isBtnInline={false}
        containerClassName="third-container sample"
        textClassName="third-text"
        btnClassName="third-btn"
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, ipsa?
        Ullam quis perspiciatis, vero temporibus officiis possimus dolore
        corporis vitae molestiae eius aliquam reiciendis consectetur
        voluptatibus excepturi beatae, maiores totam!
      </WordExpander>
      <h2>Letter Expander</h2>
      <LetterExpander
        wordsNumToShow={20}
        isCollapsedAtBeginning={true}
        btnPreFix=""
        collapseBtnText=" <= collapse"
        expandBtnText=" => expand"
        btnColor="lightCoral"
        textDecoration="none"
        isBtnInline={true}
        containerClassName="sample"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ipsa
        culpa dolorem, a fugiat ducimus, esse dolore sint ex cupiditate ad
        tempore ipsum obcaecati id placeat quis tempora inventore neque.
      </LetterExpander>
      <LetterExpander
        wordsNumToShow={10}
        isCollapsedAtBeginning={true}
        collapseBtnText="show less"
        expandBtnText="show more"
        btnColor="lightblue"
        textDecoration="underline"
        isBtnInline={true}
        containerClassName="sample"
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam sunt
        quam, eaque nostrum amet libero vel maxime? Inventore officiis sequi,
        aut laudantium dolore molestias natus iste voluptate pariatur voluptatem
        voluptatibus?
      </LetterExpander>
      <LetterExpander
        wordsNumToShow={28}
        isCollapsedAtBeginning={false}
        btnPreFix=" ... "
        collapseBtnText="less"
        expandBtnText="more"
        btnColor="inherit"
        textDecoration="underline"
        isBtnInline={false}
        containerClassName="third-container sample"
        textClassName="third-text"
        btnClassName="third-btn"
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, ipsa?
        Ullam quis perspiciatis, vero temporibus officiis possimus dolore
        corporis vitae molestiae eius aliquam reiciendis consectetur
        voluptatibus excepturi beatae, maiores totam!
      </LetterExpander>

      <h2>Star Rating</h2>
      <StarRating
        messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
        defaultRating={3}
        className="sample"
      />
      <Sample className="sample" />
    </>
  );
}

export default App;
