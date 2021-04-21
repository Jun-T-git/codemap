import FormElements from "../molecules/formElements";
import Text from "../atoms/Text";
import Button from "../atoms/button";

// ログインフォーム
// className 属性

const LogInForm = ({ className }) => (
  <div
    className={`${className} bg-white shadow-md rounded px-14 pt-6 pb-8 mb-4 max-w-md mx-auto`}
  >
    <Text
      content={"Codemapにログイン"}
      className={"text-center text-2xl font-bold mt-2"}
    />
    <FormElements
      text={"ID"}
      onChange={() => {}}
      placeHolder={"@testId_123"}
      className={"my-7"}
    />
    <FormElements
      text={"パスワード"}
      onChange={() => {}}
      placeHolder={"********"}
      type={"password"}
      className={"my-7"}
    />
    <Button onClick={() => {}} className={"w-full btn-black mt-5 mb-2"}>
      ログイン
    </Button>
  </div>
);

export default LogInForm;
