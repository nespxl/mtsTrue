import Main from '../page/Main.svelte'
import FormRegistration from '../page/FormRegistration.svelte'
import ListFilms from '../page/ListFilms.svelte'
import Presets from '../page/Presets.svelte'
import NewAccount from '../page/NewAccount.svelte'
import FilmId from '../page/FilmId.svelte'

const routes = {
    '/home': Main,
    '/registration': FormRegistration,
    '/films': ListFilms,
    '/films/:id': FilmId,
    '/presets': Presets,
    '/new': NewAccount
}

export default routes
