import FieldToSet from './FieldToSet'
import { mergeEducation } from './defaultFields'

class AddEducation extends FieldToSet {
  getFields() {
    return {
      education: [mergeEducation(this.body)],
    }
  }
}

export default (req, res) => new AddEducation(req, res)
