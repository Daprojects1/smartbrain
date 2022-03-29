import { ClarifaiStub, grpc } from "clarifai-nodejs-grpc"

const stub = ClarifaiStub.grpc();
const metadata = new grpc.Metadata()
metadata.set("authorization", "9303e58719674c6b95e4f7397e4ad2b4")

const headerDetails = {
    // This is the model ID of a publicly available General model. You may use any other public or custom model ID.
    model_id: "aaa03c23b3724a16a56b629203edc62c",
    inputs: [{ data: { image: { url: "https://samples.clarifai.com/dog2.jpeg" } } }]
}