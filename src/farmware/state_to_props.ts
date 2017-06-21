import { Everything } from "../interfaces";
import { selectAllImages } from "../resources/selectors";
import { FarmwareProps } from "../devices/interfaces";
import { betterMerge } from "../util";
import { DEFAULTS } from "../images/weed_detector/remote_env";

export function mapStateToProps(props: Everything): FarmwareProps {
  let images = _(selectAllImages(props.resources.index))
    .sortBy(x => x.body.id)
    .reverse()
    .value();

  let currentImage = images
    .filter(i => i.uuid === props.resources.consumers.farmware.currentImage)[0];
  throw new Error(`
    NEXT STEPS:
      1. Stop using .bot- it makes it harder to test things.
      2. betterMerge(DEFAULT, devices.current.hardware.farmwareEnv(or whatever))
      3. Write tests!!!
  `)
  return {
    env: betterMerge(props.bot.hardware.user_env, DEFAULTS),
    dispatch: props.dispatch,
    currentImage,
    images
  };
}

