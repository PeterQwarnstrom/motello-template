import { useRoom, useUser, useSocket } from 'motello-client';
import { constants, utils } from 'motello-utils';
import * as RoomModels from 'motello-types/dist/models/roomModels';
import { RoomCreateCommand } from 'motello-types/dist/commands/roomCommands';
import React, { useRef, useState } from 'react';

export default function Room() {
  const { actions } = useRoom();
  const { selectedUser } = useUser();
  const [selectedRoom, setSelectedRoom] = useState<RoomModels.Room>();
  const ref = useRef<HTMLInputElement>();

  const handleSelectRoom = async (id: string) => {
    const room = await actions.getById(id, selectedUser?.id ?? '0');
    setSelectedRoom(room);
  };

  const handleCreate = () => {
    if (!ref?.current) return;

    var command = utils.createCommand<RoomCreateCommand>({
      type: 'monopoly',
      userId: selectedUser?.id ?? '0',
      participate: true,
    });

    actions.create(command);
  };

  return (
    <div>
      <h3>Selected Room:</h3>
      <div>{!!selectedRoom ? JSON.stringify(selectedRoom, null, 4) : 'None selected'}</div>
    </div>
  );
}
