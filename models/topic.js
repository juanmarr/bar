import mongoose, {Schema} from "mongoose";

const topicSchema = new Schema(
    {
        drink: String,
        description: String,
    },
    {
        timestamps: true,
    }
);
//if already have model then jhust get Topic
const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

export default Topic;