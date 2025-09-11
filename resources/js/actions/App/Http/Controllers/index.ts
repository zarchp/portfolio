import GoodreadsController from './GoodreadsController'
import ContactController from './ContactController'
const Controllers = {
    GoodreadsController: Object.assign(GoodreadsController, GoodreadsController),
ContactController: Object.assign(ContactController, ContactController),
}

export default Controllers