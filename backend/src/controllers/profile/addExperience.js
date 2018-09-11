import FieldToSet from './FieldToSet'
import { mergeExperience } from './defaultFields'

class AddExperience extends FieldToSet {
  getFields() {
    return {
      experience: [mergeExperience(this.body)],
    }
  }
}

export default (req, res) => new AddExperience(req, res)
