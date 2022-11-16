import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Box, Button, Text, Image } from 'native-base';
import ExpoDraw from 'expo-draw';
import { captureRef as takeSnapshotAsync } from 'react-native-view-shot';


function DrawingPad()
{
  const [ image, setImage ] = useState(null);

  const mySaveFx = async () => {
    const drawing = await takeSnapshotAsync(this.refOfExpoDrawElement, {
      result: 'tmpfile',
      quality: 0.5,
      format: 'png',
    });
  
    //The output will be a local tmpfile (uri)[String], with the current lines that were drawn. Therefore, you can save it or so! ;)
    console.log(drawing);
  }

  const pickImage = async () =>
  {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [ 4, 3 ],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled)
    {
      setImage(result.assets[ 0 ].uri);
    }
  };

  return (
    <Box
      flex="1"
      width="100%"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box height="75%" justifyContent="center">
        {
          image
            ? <Image size="2xl" alt="selected image" source={ { uri: image } } />// render image
            : <ExpoDraw
              strokes={ [] }
              containerStyle={ { backgroundColor: 'rgba(225,225,0,0.01)', height: 300, width: 500 } }
              color={ '#000000' }
              strokeWidth={ 4 }
              enabled={ true }
            />
            // render text saying no image selected
        }
      </Box>
      {/* <Button
        bg="green.600"
        width="75%" margin={ 20 }
        onPress={ pickImage }
      >
        Share your drawing
      </Button> */}
      <Button
        bg="green.600"
        width="75%" margin={ 20 }
        onPress={ mySaveFx }
      >
        Save
      </Button>
    </Box>
  )
}

export default DrawingPad;
