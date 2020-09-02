import React from 'react'
import Card from '../../shared/components/UIelement/card'
import Button from '../../shared/components/FormElement/Button'
import PlaceItem from './PlaceItem'
import './PlaceList.css'

const PlaceList = (props)=>{
    if (props.items.length === 0) {
        return (
          <div className="place-list center">
            <Card className="paddingCard">
              <h2>No Places found,maybe create One?</h2>
              <Button to="/places/new">Share Place</Button>
            </Card>
          </div>
        );
      }
      return (
        <ul className="place-list">
          {props.items.map((place) => (
            <PlaceItem
              key={place.id}
              id={place.id}
              image={place.imageURL}
              title={place.title}
              description = {place.description}
              address={place.address}
              creatorId={place.creator}
              coordinates={place.location}
            />
          ))}
        </ul>
      );
}
export default PlaceList
