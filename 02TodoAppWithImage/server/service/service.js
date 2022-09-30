import ListItem from "../models/ListItem";

export const addItem = async (req, res) => {
  try {
    const bucketListItems = await ListItem.find();
    if (!bucketListItems) throw new Error("No bucketListItems");
    const sorted = bucketListItems.sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
    res.status(200).json(sorted);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const showItem = async (req, res) => {
  const newBucketListItem = new ListItem(req.body);
  try {
    const bucketListItem = await newBucketListItem.save();
    if (!bucketListItem)
      throw new Error("Something went wrong saving the bucketListItem");
    res.status(200).json(bucketListItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateItem = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await ListItem.findByIdAndUpdate(id, req.body);
    if (!response) throw Error("Something went wrong ");
    const updated = { ...response._doc, ...req.body };
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteItem = async (req, res) => {
  const { id } = req.params;
  try {
    const removed = await ListItem.findByIdAndDelete(id);
    if (!removed) throw Error("Something went wrong ");
    res.status(200).json(removed);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
