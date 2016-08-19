/**
 * @constructor Creates a new memory manager for the provided array.
 * @param {memory} An array to use as the backing memory.
 */
function MemoryManager(memory){
  this.used = memory;
  for (let i = 0; i < memory.length; i++)
    this.used[i] = false;
  this.index = {};
}

/**
 * Allocates a block of memory of requested size.
 * @param {number} size - The size of the block to allocate.
 * @returns {number} A pointer which is the index of the first location in the allocated block.
 * @throws If it is not possible to allocate a block of the requested size.
 */
MemoryManager.prototype.allocate = function(size){
  if (size > this.used.length)
    throw "Exception";
  for (let i = 0; i < this.used.length; i++)
  {
    if (this.used[i] == false)
    {
      let j = i;
      for (; i + size <= this.used.length && j < i + size && this.used[j] == false; j++);
      if (j == i + size)
      {
        for(let j = i; j < i + size; j++)
          this.used[j] = null;
        this.index[i] = size;
        return i;
      }
    }
    if (i == this.used.length-1)
      throw "Exception";
  }
};

/**
 * Releases a previously allocated block of memory.
 * @param {number} pointer - The pointer to the block to release.
 * @throws If the pointer does not point to an allocated block.
 */
MemoryManager.prototype.release = function(pointer){
  if (!(pointer in this.index))
    throw "Exception";
  for (let i = 0; i < this.index[pointer]; i++)
  {
    if (this.used[pointer + i] == false)
      throw "Exception";
    this.used[pointer + i] = false;
  }
  delete this.index[pointer];
};

/**
 * Reads the value at the location identified by pointer
 * @param {number} pointer - The location to read.
 * @returns {number} The value at that location.
 * @throws If pointer is in unallocated memory.
 */
MemoryManager.prototype.read = function(pointer){
  let un;
  if (this.used[pointer] != false)
    return this.used[pointer] === null ? un : this.used[pointer];
  else
    throw "Exception";
}

/**
 * Writes a value to the location identified by pointer
 * @param {number} pointer - The location to write to.
 * @param {number} value - The value to write.
 * @throws If pointer is in unallocated memory.
 */
MemoryManager.prototype.write = function(pointer, value){
  if (this.used[pointer] != false)
      this.used[pointer] = value;
  else
    throw "Exception";
}
