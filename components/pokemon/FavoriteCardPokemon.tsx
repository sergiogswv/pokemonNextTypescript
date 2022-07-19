import { Card, Grid } from '@nextui-org/react'
import { useRouter } from 'next/router'
import React from 'react'

interface Props {
    pokemonId: number,
}

const FavoriteCardPokemon: React.FC<Props> = ({ pokemonId }) => {

    const router = useRouter()

    const onFavoriteClicked = () => {
        router.push(`/pokemon/${pokemonId}`)
    }

    return (
        <Grid xs={6} sm={3} md={2} lg={1} key={pokemonId}>
            <Card hoverable clickable css={{ padding: 10 }}>
                <Card.Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
                    width={"100%"}
                    height={140}
                    onClick={onFavoriteClicked}
                />
            </Card>
        </Grid>
    )
}

export default FavoriteCardPokemon